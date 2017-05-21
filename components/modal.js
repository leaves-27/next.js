const Modal = () => (
  <div id="modal" className="modal fade" tabindex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 className="modal-title">扫描二维码进行捐赠</h4>
        </div>
        <div className="modal-body">
          <p style={{ "text-align" : "center" }}>
            <img style={{ "max-width":"50%" }} src="../static/images/zfb.jpg" />
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Modal