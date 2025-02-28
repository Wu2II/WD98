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
      <p id="merci_txt">Bonjour toute l'equipe de XEFI ! <br/> je vous écris ici pour témoigner
      de ma motivation pour rejoindre votre équipe et progresser ensemble <br/>Merci beaucoup !
        </p>
      </div>
        </>
    ) 
}
export default Cv