import React, { useEffect, useState } from 'react';
import { getUserInvitations, respondToInvitation } from '../../utils/fetch';
import styles from "./invitaciones.module.css";

const Invitaciones = () => {
  const [invitations, setInvitations] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        const userId = "ID_DEL_USUARIO"; // Asegúrate de obtener el ID del usuario correctamente
        const result = await getUserInvitations(userId);
        if (result && result.data && Array.isArray(result.data)) {
          //console.log("invitaciones recibidas", result)
          setInvitations(result.data);
        }
      } catch (error) {
        console.error("Error al obtener las invitaciones:", error.message);
      }
    };
    fetchInvitations();
  }, []);

  const handleResponse = async (projectId, response) => {
    try {
      //console.log("ESTADO INVITACIONES",invitations)
      //console.log(projectId, response)
      await respondToInvitation(projectId, {response});
      setInvitations(invitations.filter(inv => inv.projectId !== projectId));
    } catch (error) {
      console.error(`Error al responder a la invitación para el proyecto ${projectId}:`, error.message);
    }
  };

  return (
    <div className={styles.notificacionContainer}>
      <div className={styles.notificacionIcon} onClick={() => setIsOpen(!isOpen)}>
        <span>Mensajería</span>
        {invitations.length > 0 && <span className={styles.badge}>{invitations.length}</span>}
      </div>
      {isOpen && (
        <div className={styles.notificacionPanel}>
          {invitations.map(inv => (
            <div key={inv.projectId} className={styles.invitacion}>
              <div className={styles.header}>
                <img src="/path/to/arcelormittal-logo.png" alt="ArcelorMittal" className={styles.logo} />
                <span className={styles.close}>&times;</span>
              </div>
              <div className={styles.content}>
                <p>Estimada empresa,</p>
                <p>Ha recibido una solicitud de colaboración de <strong>{inv.projectTitle}</strong>.</p>
                <p><strong>Detalles:</strong></p>
                <p>Esta es la breve descripción de la solicitud de colaboración, que explica el tema, el calendario y otros detalles sobre el proyecto.</p>
                <p>¿Quieres formar parte de este proyecto y ponerte en contacto directo con <strong>{inv.projectTitle}</strong>?</p>
              </div>
              <div className={styles.botones}>
                <button className={styles.aceptar} onClick={() => handleResponse(inv.projectId, 'accepted')}>
                  Aceptar Colaboración
                </button>
                <button className={styles.rechazar} onClick={() => handleResponse(inv.projectId, 'rejected')}>
                  Rechazar Colaboración
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Invitaciones;