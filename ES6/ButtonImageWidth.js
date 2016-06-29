import React, { Component, PropTypes } from 'react'
import AlloyEditor from 'alloyeditor';

class ButtonImageWidth extends Component {

    static key = 'imageWidth';

    static widthOptions = [20,25,33,50,66,75,100];

    static propTypes = {
        editor: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        const editor = props.editor.get('nativeEditor');
        const image = editor.getSelection().getSelectedElement();
        const imageWidthAsPercent = image.$.offsetWidth / image.$.parentNode.offsetWidth * 100;
        const imageWidth = Math.round(imageWidthAsPercent) + '%' || 'auto';

        this.state = {
            imageWidth: imageWidth
        }
    }

    applyWidth(event, props) {

        const editor = props.editor.get('nativeEditor');
        const image = editor.getSelection().getSelectedElement();
        const imageWidth = event.target.value || 'auto';

        this.state.imageWidth = imageWidth;
        image.setAttribute('width', imageWidth);

        editor.fire('actionPerformed', this);
    }

    render() {

        return (
            <div className="ae-container">
                <label>width: </label>
                <select name="image-width" onChange={e => this.applyWidth(e, this.props)} value={this.state.imageWidth}>
                    <option value="auto">auto</option>
                    {ButtonImageWidth.widthOptions.map(size =>
                        <option key={size} value={size + '%'}>{size + '%'}</option>
                    )}
                </select>
            </div>
        );
    }

}

export default AlloyEditor.Buttons[ButtonImageWidth.key] = AlloyEditor.ButtonImageWidth = ButtonImageWidth;
