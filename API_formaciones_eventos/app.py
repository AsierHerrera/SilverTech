# Importaciones necesarias
import configparser
import pymysql
import pandas as pd
import dash
import dash_bootstrap_components as dbc
from dash import dcc, html
from dash.dependencies import Input, Output
import plotly.graph_objects as go
from flask import Flask

# Cargar el archivo de configuración
config = configparser.ConfigParser()
config.read('config.ini')

# Acceder a las configuraciones
username = config['Credentials']['username']
password = config['Credentials']['password']
host = config['Credentials']['host']
port = config['Credentials']['port']

# Conectar a la base de datos
db = pymysql.connect(
    host=host,
    user=username,
    password=password,
    cursorclass=pymysql.cursors.DictCursor
)

# Crear un cursor para ejecutar queries
cursor = db.cursor()

# Seleccionar la base de datos
cursor.execute('USE desafio')

# Ejecutar consulta y almacenar resultados en un DataFrame
cursor.execute('SELECT * FROM formacion')
df = pd.DataFrame(cursor.fetchall())

# Ejecutar consulta y almacenar resultados en un DataFrame para eventos
cursor.execute('SELECT * FROM eventos')
df_eventos = pd.DataFrame(cursor.fetchall())

# Cerrar la conexión a la base de datos
cursor.close()
db.close()

# Procesamiento de datos
df['ingresos_proy'] = df['totalInscriptions'] * df['price']
df['startDate'] = pd.to_datetime(df['startDate'])
df['endDate'] = pd.to_datetime(df['endDate'])
df['month'] = df['startDate'].dt.strftime('%B')
df['month'] = pd.Categorical(df['month'], categories=['August', 'September', 'October', 'November', 'December'], ordered=True)

# Procesamiento de datos para eventos 
df_eventos['participations'] = df_eventos['participations'].astype(float)
df_eventos['ingresos_proy'] = df_eventos['participations'] * df_eventos['price']
df_eventos['startDate'] = pd.to_datetime(df_eventos['startDate'])
df_eventos['endDate'] = pd.to_datetime(df_eventos['endDate'])
df_eventos['month'] = df_eventos['startDate'].dt.strftime('%B')
df_eventos['month'] = pd.Categorical(df_eventos['month'], categories=['August', 'September', 'October', 'November', 'December'], ordered=True)

# Inicializar la aplicación Dash y Flask
server = Flask(__name__)
app = dash.Dash(__name__, server=server, external_stylesheets=[dbc.themes.BOOTSTRAP])
app2 = dash.Dash(__name__, server=server, external_stylesheets=[dbc.themes.BOOTSTRAP], url_base_pathname='/dashboard-eventos/')

# Diseño del layout formaciones 
app.layout = dbc.Container([
    dbc.Row([
        dbc.Col(html.H1("Dashboard Formaciones", className='text-center mb-4', style={'color': 'black', 'font-weight': 'bold'}), width=12)
    ]),
    dbc.Row([
        dbc.Col([
            dcc.Dropdown(
                id='filter-month',
                options=[{'label': month, 'value': month} for month in df['month'].unique()],
                multi=True,
                placeholder='Selecciona meses'
            ),
            dcc.Dropdown(
                id='filter-name',
                options=[{'label': name, 'value': name} for name in df['name'].unique()],
                multi=True,
                placeholder='Selecciona formaciones'
            ),
        ], width=6),
    ]),
    dbc.Row([
        dbc.Col([
            dcc.Graph(id='formaciones-mes', config={'displayModeBar': False}, style={'height': '350px'})  # Ajuste de altura del gráfico
        ], width=6),
        dbc.Col([

            dcc.Graph(id='porcentaje-inscripciones', config={'displayModeBar': False}, style={'height': '300px'})  # Ajuste de altura del gráfico
            
        ], width=5)
    ], style={'marginTop': 25}),
    dbc.Row([
        dbc.Col([
            html.H3("Detalle de Formaciones", style={'color': '#091864', 'font-size': '1.3rem'}),
            html.Div([
                dbc.Table(id='table-container', striped=True, bordered=True, hover=True, size='sm', style={'fontSize': '0.85em'})
            ], style={'height': '300px', 'overflowY': 'scroll', 'paddingRight': '20px'})
        ], width=6),
        dbc.Col([

            dcc.Graph(id='plazas-meta', config={'displayModeBar': False}, style={'height': '320px'})  # Ajuste de altura del gráfico
        ], width=6),
    ])
])

# Layout para eventos
app2.layout = dbc.Container([
    dbc.Row([
        dbc.Col(html.H1("Dashboard Eventos", className='text-center mb-4', style={'color': 'black', 'font-weight': 'bold'}), width=12)
    ]),
    dbc.Row([
        dbc.Col([
            dcc.Dropdown(
                id='filter-month-eventos',
                options=[{'label': month, 'value': month} for month in df_eventos['month'].unique()],
                multi=True,
                placeholder='Selecciona meses'
            ),
            dcc.Dropdown(
                id='filter-name-eventos',
                options=[{'label': name, 'value': name} for name in df_eventos['name'].unique()],
                multi=True,
                placeholder='Selecciona eventos'
            ),
        ], width=6),
    ]),
    dbc.Row([
        dbc.Col([
            dcc.Graph(id='eventos-mes', config={'displayModeBar': False}, style={'height': '350px'})  # Ajuste de altura del gráfico
        ], width=6),
        dbc.Col([
            dcc.Graph(id='porcentaje-inscripciones-eventos', config={'displayModeBar': False}, style={'height': '300px'})  # Ajuste de altura del gráfico
        ], width=5)
    ], style={'marginTop': 25}),
    dbc.Row([
        dbc.Col([
            html.H3("Detalle de Eventos", style={'color': '#091864', 'font-size': '1.3rem'}),
            html.Div([
                dbc.Table(id='table-container-eventos', striped=True, bordered=True, hover=True, size='sm', style={'fontSize': '0.85em'})
            ], style={'height': '300px', 'overflowY': 'scroll', 'paddingRight': '20px'})
        ], width=6),
        dbc.Col([
            dcc.Graph(id='plazas-meta-eventos', config={'displayModeBar': False}, style={'height': '320px'})  # Ajuste de altura del gráfico
        ], width=6),
    ])
])

# Callback para actualizar las opciones del dropdown de nombres de formaciones
@app.callback(
    Output('filter-name', 'options'),
    [Input('filter-month', 'value')]
)
def set_formaciones_options(selected_months):
    if selected_months:
        filtered_df = df[df['month'].isin(selected_months)]
    else:
        filtered_df = df
    formaciones = [{'label': name, 'value': name} for name in filtered_df['name'].unique()]
    return formaciones

# Callback para actualizar los gráficos y tabla basados en las selecciones de usuario
@app.callback(
    [Output('formaciones-mes', 'figure'),
     Output('porcentaje-inscripciones', 'figure'),
     Output('table-container', 'children'),
     Output('plazas-meta', 'figure')],
    [Input('filter-month', 'value'),
     Input('filter-name', 'value')]
)
def update_graphs(selected_months, selected_names):
    filtered_df = df.copy()

    if selected_months:
        filtered_df = filtered_df[filtered_df['month'].isin(selected_months)]
    if selected_names:
        filtered_df = filtered_df[filtered_df['name'].isin(selected_names)]

    # Ordenar los meses cronológicamente
    formaciones_mes = filtered_df.groupby('month', observed=True).size().reset_index(name='count')
    ingresos_mes = filtered_df.groupby('month', observed=True)['ingresos_proy'].sum().reset_index(name='sum')
    formaciones_mes = formaciones_mes.sort_values(by='month')
    ingresos_mes = ingresos_mes.sort_values(by='month')

    fig_formaciones_mes = go.Figure()
    fig_formaciones_mes.add_trace(go.Bar(x=formaciones_mes['month'], y=formaciones_mes['count'], name='Cantidad Formaciones', marker_color='#4994eb', yaxis='y'))
    fig_formaciones_mes.add_trace(go.Scatter(x=ingresos_mes['month'], y=ingresos_mes['sum'], name='Suma de Ingresos', line=dict(color='#091864'), yaxis='y2'))

    fig_formaciones_mes.update_layout(
        title='Cantidad de Formaciones e Ingresos Mensuales',
        xaxis_title='Mes',
        yaxis=dict(title='Cantidad Formaciones', side='left'),
        yaxis2=dict(title='Ingresos Euros', overlaying='y', side='right'),
        margin=dict(l=5, r=50, t=60, b=60)  # Ajuste de márgenes izquierdo, derecho, superior e inferior
    )

    # Gráfico de porcentaje de inscripciones alcanzado (gauge)
    total_inscriptions_filtered = filtered_df['totalInscriptions'].sum()
    total_slots_filtered = filtered_df['availableSlots'].sum()
    percentage_achieved_filtered = total_inscriptions_filtered / total_slots_filtered if total_slots_filtered > 0 else 0

    # Determinar el color del medidor según los rangos especificados
    if percentage_achieved_filtered < 0.6:
        gauge_color = "red"
    elif 0.6 <= percentage_achieved_filtered < 1:
        gauge_color = "#091864"  # Azul oscuro
    else:
        gauge_color = "green"

    fig_gauge = go.Figure(go.Indicator(
        mode="gauge+number",
        value=percentage_achieved_filtered,
        domain={'x': [0, 1], 'y': [0, 1]},
        gauge={'axis': {'range': [0, 1]},
               'bar': {'color': gauge_color},
               'threshold': {
                   'line': {'color': "green", 'width': 4},
                   'thickness': 0.75,
                   'value': 1.0}
               }
    ))

    fig_gauge.update_layout(
        title='Porcentaje de Inscripciones Alcanzado',
        title_x=0.5,  # Alineación del título con el centro del gráfico
        paper_bgcolor='rgba(0,0,0,0)',  # Fondo transparente
        plot_bgcolor='rgba(0,0,0,0)',   # Fondo transparente
        showlegend=False,  # No mostrar la leyenda (corte de colores)
        height=330,  # Altura del gráfico aumentada nuevamente
    )

    # Gráfico de plazas meta y inscripciones por ID
    fig_plazas_meta = go.Figure(data=[
        go.Bar(name='Plazas Meta', x=filtered_df['id'].astype(str), y=filtered_df['availableSlots'], marker_color='#091864'),
        go.Bar(name='Inscripciones', x=filtered_df['id'].astype(str), y=filtered_df['totalInscriptions'], marker_color='#4994eb')
    ])

    fig_plazas_meta.update_layout(
        title='Plazas Meta vs Inscripciones ',
        title_x=0.4,  # Alineación del título con el centro del gráfico
        barmode='group',
        xaxis=dict(title='ID Formación', tickangle=0, type='category'),  # Etiqueta del eje x
        margin=dict(l=75, r=10, t=40, b=40),  # Márgenes para asegurar que todas las etiquetas sean visibles
    )

    # Calcular sumatorias
    sum_plazas_meta = filtered_df['availableSlots'].sum()
    sum_inscripciones = filtered_df['totalInscriptions'].sum()
    sum_ingresos_proy = filtered_df['ingresos_proy'].sum()

    # Generar la tabla de formaciones con valores centrados y suma al final
    tabla_formaciones = dbc.Table([
        html.Thead(
            html.Tr([
            html.Th("ID", style={'verticalAlign': 'middle'}),
            html.Th("Formación", style={'verticalAlign': 'middle'}),
            html.Th("Plazas Meta", style={'verticalAlign': 'middle'}),
            html.Th("Inscripciones", style={'verticalAlign': 'middle'}),
            html.Th("Ingresos Esperados", style={'verticalAlign': 'middle'}),
            ], style={'textAlign': 'center'})
        ),
        html.Tbody([
            html.Tr([
                html.Td(row['id']),
                html.Td(row['name']),
                html.Td(row['availableSlots'], style={'textAlign': 'center'}),
                html.Td(row['totalInscriptions'], style={'textAlign': 'center'}),
                html.Td(f"{row['ingresos_proy']:,.2f} €", style={'textAlign': 'center'})
            ]) for _, row in filtered_df.iterrows()
        ] + [
            html.Tr([
                html.Td(''),
                html.Td(html.B("Total:")),
                html.Td(html.B(sum_plazas_meta), style={'textAlign': 'center'}),
                html.Td(html.B(sum_inscripciones), style={'textAlign': 'center'}),
                html.Td(html.B(f"{sum_ingresos_proy:,.2f} €"), style={'textAlign': 'center'})
            ])
        ])
    ], striped=True, bordered=True, hover=True, size='sm', style={'fontSize': '0.85em'})

    return fig_formaciones_mes, fig_gauge, tabla_formaciones, fig_plazas_meta

# Callback para actualizar las opciones del dropdown de nombres de Eventos
@app2.callback(
    Output('filter-name-eventos', 'options'),
    [Input('filter-month-eventos', 'value')]
)
def set_Eventos_options(selected_months):
    if selected_months:
        filtered_df = df_eventos[df_eventos['month'].isin(selected_months)]
    else:
        filtered_df = df_eventos

    Eventos = [{'label': name, 'value': name} for name in filtered_df['name'].unique()]
    return Eventos

# Callback para actualizar los gráficos y tabla basados en las selecciones de usuario
@app2.callback(
    [Output('eventos-mes', 'figure'),
     Output('porcentaje-inscripciones-eventos', 'figure'),
     Output('table-container-eventos', 'children'),
     Output('plazas-meta-eventos', 'figure')],
    [Input('filter-month-eventos', 'value'),
     Input('filter-name-eventos', 'value')]
)
def update_graphs_eventos(selected_months, selected_names):
    filtered_df = df_eventos.copy()

    if selected_months:
        filtered_df = filtered_df[filtered_df['month'].isin(selected_months)]
    if selected_names:
        filtered_df = filtered_df[filtered_df['name'].isin(selected_names)]

    # Ordenar los meses cronológicamente
    Eventos_mes = filtered_df.groupby('month', observed=True).size().reset_index(name='count')
    ingresos_mes = filtered_df.groupby('month', observed=True)['ingresos_proy'].sum().reset_index(name='sum')
    Eventos_mes = Eventos_mes.sort_values(by='month')
    ingresos_mes = ingresos_mes.sort_values(by='month')

    fig_Eventos_mes = go.Figure()
    fig_Eventos_mes.add_trace(go.Bar(x=Eventos_mes['month'], y=Eventos_mes['count'], name='Cantidad Eventos', marker_color='#f8a800', yaxis='y'))
    fig_Eventos_mes.add_trace(go.Scatter(x=ingresos_mes['month'], y=ingresos_mes['sum'], name='Suma de Ingresos', line=dict(color='#c68600'), yaxis='y2'))

    fig_Eventos_mes.update_layout(
        title='Cantidad de Eventos e Ingresos Mensuales',
        xaxis_title='Mes',
        yaxis=dict(title='Cantidad Eventos', side='left'),
        yaxis2=dict(title='Ingresos Euros', overlaying='y', side='right'),
        margin=dict(l=5, r=50, t=60, b=60)
    )

    # Gráfico de porcentaje de inscripciones alcanzado (gauge)
    total_inscriptions_filtered = filtered_df['participations'].sum()
    total_slots_filtered = filtered_df['availableSlots'].sum()
    percentage_achieved_filtered = total_inscriptions_filtered / total_slots_filtered if total_slots_filtered > 0 else 0

    if percentage_achieved_filtered < 0.6:
        gauge_color = "red"
    elif 0.6 <= percentage_achieved_filtered < 1:
        gauge_color = "#c68600"
    else:
        gauge_color = "green"

    fig_gauge = go.Figure(go.Indicator(
        mode="gauge+number",
        value=percentage_achieved_filtered,
        domain={'x': [0, 1], 'y': [0, 1]},
        gauge={'axis': {'range': [0, 1]},
               'bar': {'color': gauge_color},
               'threshold': {
                   'line': {'color': "green", 'width': 4},
                   'thickness': 0.75,
                   'value': 1.0}
               }
    ))

    fig_gauge.update_layout(
        title='Porcentaje de Inscripciones Alcanzado',
        title_x=0.5,
        paper_bgcolor='rgba(0,0,0,0)',
        plot_bgcolor='rgba(0,0,0,0)',
        showlegend=False,
        height=330,
    )

    # Gráfico de plazas meta y inscripciones por ID
    fig_plazas_meta = go.Figure(data=[
        go.Bar(name='Plazas Meta', x=filtered_df['id'].astype(str), y=filtered_df['availableSlots'], marker_color='#c68600'),
        go.Bar(name='Inscripciones', x=filtered_df['id'].astype(str), y=filtered_df['participations'], marker_color='#f8a800')
    ])

    fig_plazas_meta.update_layout(
        title='Plazas Meta vs Inscripciones ',
        title_x=0.4,
        barmode='group',
        xaxis=dict(title='ID Evento', tickangle=0, type='category'),
        margin=dict(l=75, r=10, t=40, b=40),
    )

    # Calcular sumatorias
    sum_plazas_meta = filtered_df['availableSlots'].sum()
    sum_inscripciones = filtered_df['participations'].sum()
    sum_ingresos_proy = filtered_df['ingresos_proy'].sum()

    # Generar la tabla de eventos con valores centrados y suma al final
    tabla_eventos = dbc.Table([
        html.Thead(
            html.Tr([
            html.Th("ID", style={'verticalAlign': 'middle'}),
            html.Th("Evento", style={'verticalAlign': 'middle'}),
            html.Th("Plazas Meta", style={'verticalAlign': 'middle'}),
            html.Th("Inscripciones", style={'verticalAlign': 'middle'}),
            html.Th("Ingresos Esperados", style={'verticalAlign': 'middle'}),
            ], style={'textAlign': 'center'})
        ),
        html.Tbody([
            html.Tr([
                html.Td(row['id']),
                html.Td(row['name']),
                html.Td(row['availableSlots'], style={'textAlign': 'center'}),
                html.Td(row['participations'], style={'textAlign': 'center'}),
                html.Td(f"{row['ingresos_proy']:,.2f} €", style={'textAlign': 'center'})
            ]) for _, row in filtered_df.iterrows()
        ] + [
            html.Tr([
                html.Td(''),
                html.Td(html.B("Total:")),
                html.Td(html.B(sum_plazas_meta), style={'textAlign': 'center'}),
                html.Td(html.B(sum_inscripciones), style={'textAlign': 'center'}),
                html.Td(html.B(f"{sum_ingresos_proy:,.2f} €"), style={'textAlign': 'center'})
            ])
        ])
    ], striped=True, bordered=True, hover=True, size='sm', style={'fontSize': '0.85em'})

    return fig_Eventos_mes, fig_gauge, tabla_eventos, fig_plazas_meta

# Definir los endpoints para servir los Dashboards
@server.route('/dashboard-formaciones')
def render_dashboard_formaciones():
    return app.index()

@server.route('/dashboard-eventos')
def render_dashboard_eventos():
    return app2.index()


#ejecutar servidor 
if __name__ == '__main__':
    app.run_server(debug=True, port= 8050, host= '0.0.0.0')

