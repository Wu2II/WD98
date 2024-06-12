const Cv = ({onClose}) => {
    return(
        <>
        <div style={{ width: 500}} className="window">
      <div className="title-bar">
        <div className="title-bar-text">Remerciements</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close"onClick={onClose} />
        </div>
      </div>
      <p id="merci_txt">Bonjour toute l'equipe d'Uxen <br/> je tiens a vous remercier de m'avoir reçu dans vos locaux
      ce lundi, j'ai été ravi de faire votre connaissance et de discuter avec vous. Je souhaitais également vous confirmer ma grande motivation pour intégrer votre équipe. <br/>Merci beaucoup !
        </p>
      </div>
        </>
    ) 
}
export default Cv