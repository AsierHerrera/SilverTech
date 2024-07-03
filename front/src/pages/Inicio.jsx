
import Image1 from "../ProyectComponents/Inicio/Image1";
import CardActivity from "../ProyectComponents/Inicio/CardActivity";
import Image2Icon from "../ProyectComponents/Inicio/Image2Icon";
import FooterBig from "../ProyectComponents/Inicio/FooterBig";
/* import Footer from "../ProyectComponents/Footer/Footer.jsx"; */

import styles from "./Inicio.module.css";

const Inicio = () => {
  return (
    
    <div className={styles.inicio}>
      <header className={styles.headerLogin}>
{/*         <div className={styles.logo}>
          <img
            className={styles.logoContainerIcon}
            loading="lazy"
            alt=""
            src="/frame-31@2x.png"
          />
          <div className={styles.linkMenu}>
            <div className={styles.menuLink}>Idioma</div>
            <img
              className={styles.arrowDropDownIcon}
              alt=""
              src="/arrow-drop-down.svg"
            />
          </div>
        </div> */}

      </header>
      <main className={styles.companyInfoContainer}>
        <section className={styles.companyInfoOuterContainer}>
          <div className={styles.companyInfoInnerContainer}>
            <div className={styles.companyCardContainer}>
              <div className={styles.cardInfoCompany}>
                <div className={styles.cardInfoCompany1}>
                  <img
                    className={styles.coverIcon}
                    alt=""
                    src="/cover@2x.png"
                  />
                  {/* Panel izquierdo */}
                  <div className={styles.content}>
                    <div className={styles.contentText}>
                      <div className={styles.title}>
                        <div className={styles.jabonesArtesanos}>
                          GUIA DE ACCESSIBILIDAD
                        </div>
                        <div className={styles.mstolesMadrid}>
                          Móstoles, Madrid
                        </div>
                      </div>
                      <div className={styles.followers}>
                        <div className={styles.div}>150</div>
                        <div className={styles.seguidores}> seguidores</div>
                      </div>
                    </div>
                    <button className={styles.button}>
                      <div className={styles.label}>Entrar</div>
                    </button>
                  </div>
                  <div className={styles.avatar}>
                    <img
                      className={styles.userAvatarLazyloadF2fbb67b0Icon}
                      alt=""
                      src="/useravatarlazyloadf2fbb67b00cb5b2da6eae6f859519fa001a90d3584070f7e7eee065bfc3bcaaasvg@2x.png"
                    />
                    <div className={styles.spanbadge}>
                      <div className={styles.empresa}>Empresa</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.imageBadgeContainer}>
                <Image1 />
                <button className={styles.spanbadge1}>
                  <div className={styles.empresa1}>Empresa</div>
                </button>
              </div>
            </div>
            <div className={styles.companyProfileContainer}>
              <div className={styles.companyProfile}>
                <div className={styles.description}>
                  <div className={styles.companyDetailsContainer}>
                    <div className={styles.company}>
                     {/*  Panel derecho */}
                      <div className={styles.companyNameReviews}>
                        <div className={styles.nameCompany}>
                          <h2 className={styles.rr}>{`R&R`}</h2>
                        </div>
                        <div className={styles.reviews}>
                          <img
                            className={styles.thumbUpIcon}
                            loading="lazy"
                            alt=""
                            src="/thumb-up.svg"
                          />
                          <b className={styles.reviewSeparator}>100%</b>
                          <div className={styles.valoraciones}>
                            (32valoraciones)
                          </div>
                        </div>
                      </div>
                      <div
                        className={styles.rrSeDedica}
                      >{`R&R se dedica a crear actividades culturales adaptadas a las necesidades y gustos de las personas mayores. Ofrecieron talleres de escritura, pintura, cerámica y otras artes, así como recorridos por museos, galerías de arte y teatros. También organizaron viajes culturales y escapadas de fin de semana para disfrutar de la naturaleza y la cultura en su máximo esplendor.`}</div>
                      <button className={styles.button1}>
                        <div className={styles.saberMsDe}>
                          Saber más de la empresa
                        </div>
                      </button>
                    </div>
                    <div className={styles.worker}>
                      <div className={styles.workerDetails}>
                        <img
                          className={styles.photoIcon}
                          loading="lazy"
                          alt=""
                          src="/photo@2x.png"
                        />
                        <div className={styles.francisParent}>
                          <div className={styles.francis}>Francis</div>
                          <div className={styles.historiadoraDelArte}>
                            Historiadora del Arte
                          </div>
                          <div
                            className={
                              styles.experienciaProfesionalAnaContainer
                            }
                          >
                            <span>
                              <p className={styles.experienciaProfesionalAna}>
                                Experiencia profesional: Ana ha trabajado como
                                guía en diferentes museos de España durante los
                                últimos 10 años. Actualmente, trabaja en el
                                Museo Nacional del Prado en Madrid, donde ha
                                sido guía desde el año 2016. Además de guiar a
                                los visitantes a través de las colecciones del
                                museo, Ana también ha realizado investigaciones
                                sobre algunas de las obras más destacadas del
                                Prado y ha escrito varios artículos académicos
                                sobre arte español.
                              </p>
                              <p className={styles.conocimientosEspecializados}>
                                Conocimientos especializados: Ana tiene un
                                amplio conocimiento sobre arte español, en
                                particular de la Edad de Oro. También ha
                                estudiado a fondo la obra de algunos de los
                                artistas más importantes de la historia del
                                arte, como Velázquez, Goya y Picasso. Ana
                                también es experta en la historia de la pintura
                                flamenca y holandesa.
                              </p>
                            </span>
                          </div>
                          <div className={styles.leerCompleto}>
                            Leer completo
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.activityContainer}>
            <div className={styles.activityItemWrapper}>
              <div className={styles.cardActivityItem}>
                {/* Paneles inferiore */}
                <div className={styles.cardCover}>
                  <img
                    className={styles.videoIcon}
                    loading="lazy"
                    alt=""
                    src="/video@2x.png"
                  />
                  <div className={styles.tag}>
                    <div className={styles.nuevo}>Nuevo</div>
                  </div>
                </div>
                <div className={styles.cardTop}>
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitle}>
                      <b className={styles.creaJabonesArtesanos}>
                        Crea jabones artesanos como los de antes
                      </b>
                    </div>
                    <div className={styles.text}>
                      <div className={styles.unCursoConContainer}>
                        <span>{`Un curso con `}</span>
                        <b>JabonArte</b>
                      </div>
                    </div>
                    <div className={styles.date}>
                      <div className={styles.martesYJueves}>
                        Martes y Jueves · 17:00-19:00
                      </div>
                      <div className={styles.mstolesMadrid1}>
                        Móstoles - Madrid
                      </div>
                    </div>
                    <div className={styles.info}>
                      <div className={styles.persons}>
                        <img
                          className={styles.personIcon}
                          loading="lazy"
                          alt=""
                          src="/person.svg"
                        />
                        <div className={styles.asistentes15}>Asistentes 15</div>
                      </div>
                      <div className={styles.likes}>
                        <img
                          className={styles.thumbUpIcon1}
                          alt=""
                          src="/thumb-up-1.svg"
                        />
                        <div className={styles.div1}> 100% (32)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  <div className={styles.priceTag}>
                    <div className={styles.dto}>-67% Dto.</div>
                    <div className={styles.antes5999}>Antes 59,99€</div>
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.icon}
                      loading="lazy"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className={styles.priceLabel}>
                      <div className={styles.label1}>
                        <div className={styles.label2}>Comprar</div>
                      </div>
                      <div className={styles.price}>
                        <div className={styles.price1}>19,99 €</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CardActivity text="No Publicada" />
              <div className={styles.activityCardImage}>
                {/* Panel inferior derecho */}
                <Image2Icon />
                <div className={styles.cardInfoCompany2}>
                  <div className={styles.cardInfoCompany3}>
                    <img
                      className={styles.coverIcon1}
                      alt=""
                      src="/cover@2x.png"
                    />
                    <div className={styles.content1}>
                      <div className={styles.contentText1}>
                        <div className={styles.title1}>
                          <div className={styles.jabonesArtesanos1}>
                            GUIA DE ACCESSIBILIDAD
                          </div>
                          <div className={styles.mstolesMadrid2}>
                            Móstoles, Madrid
                          </div>
                        </div>
                        <div className={styles.followers1}>
                          <div className={styles.imageFollowersCount}>150</div>
                          <div className={styles.seguidores1}> seguidores</div>
                        </div>
                      </div>
                      <button className={styles.button3}>
                        <div className={styles.label3}>Entrar</div>
                      </button>
                    </div>
                    <div className={styles.avatar1}>
                      <img
                        className={styles.userAvatarLazyloadF2fbb67b0Icon1}
                        alt=""
                        src="/useravatarlazyloadf2fbb67b00cb5b2da6eae6f859519fa001a90d3584070f7e7eee065bfc3bcaaasvg@2x.png"
                      />
                      <div className={styles.spanbadge2}>
                        <div className={styles.empresa2}>Empresa</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterBig />
    </div>
    
  );
};

export default Inicio;
