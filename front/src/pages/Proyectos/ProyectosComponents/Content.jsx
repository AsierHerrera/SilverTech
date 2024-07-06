import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Content.module.css';
import "./Components.scss"
import banner from '../../../../public/banner_proyectos.png'
import avatar from '../../../../public/avatar_proyectos.png'


import { getCompanyByUserId } from '../../../utils/fetch'; 

const Content = ({ className = '' }) => {
  const [company, setCompany] = useState(null); 

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const companyData = await getCompanyByUserId(); 
        setCompany(companyData); 
      } catch (error) {
        console.error('Error al obtener los datos de la empresa:', error.message);
 
      }
    };

    fetchCompanyData();
  }, []);

  if (!company) {
    return <div>Cargando datos de la empresa...</div>; 
  }

  return (
    <section className={[styles.content, className].join(' ')}>
      <div className={styles.companyProfile}>
        <p className="navegation-history-proyecto" > <span>Inicio</span>  {">"} <span></span> Perfil {">"} <span></span> Mis datos</p>
        <h1 className={styles.perfilDeEmpresa} id='proyecto-title'>Perfil de empresa</h1>
        <div className={styles.profileDetails}>
          <div id='proyectos-datos'>
            <div className={styles.profileDetailsInner}>
              <div className={styles.avatarBackgroundParent}>
                <img
                  className={styles.avatarBackgroundIcon}
                  alt=""
                  src={banner}
                />
                <img
                  className={styles.avaIcon}
                  loading="lazy"
                  alt=""
                  src={avatar}
                />
              </div>
            </div>
            <div className={styles.profileInfo}>
              <div className={styles.profileNameTime}>
                <div className={styles.nameTimeContainer}>
                  <h1 className={styles.nikcname}>{company.name}</h1>
                  <h3 className={styles.time}>{company.description}</h3>
                </div>
              </div>
              <div className={styles.profileContact}>
                <div className={styles.contactContainer}>
                  <div className={styles.direccinNmeroCifContainer}>
                    <h2>ArcelorMittal</h2>
                    <h3>Compañía siderúrgica</h3>
                    <div id='proyecto-contacto'>
                      <div>
                        <p className={styles.direccin}>Dirección: {/*{company.address}*/}</p>
                        <p className={styles.nmeroCif}>Número CIF: {/*{company.cif}*/}</p>
                        <p className={styles.sitioWeb}>Sitio Web:{/*<a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></p>                  <p className={styles.contacto}>Contacto: {company.phone}*/}</p>
                        <p className={styles.nmeroCif}>Contacto </p>
                      </div>
                      <div>
                        <p className={styles.direccin}>Eguetiaga Eribarri, s/n, 48450 Basauri, Bizkaia{/*{company.address}*/}</p>
                        <p className={styles.nmeroCif}>A12345678{/*{company.cif}*/}</p>
                        <p className={styles.sitioWeb}>www.arcelormittal.com{/*<a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></p>                  <p className={styles.contacto}>Contacto: {company.phone}*/}</p>
                        <p className={styles.nmeroCif}>arcelormittal@negocio.com</p>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
