var React = require('react');
var AlloyEditor = require('alloyeditor');

var ButtonImageWidth  = React.createClass({
    propTypes: {
        editor: React.PropTypes.object.isRequired
    },
    statics: {
        key: 'imageWidth',
        widthOptions: [20,25,33,50,66,75,100]
    },
    getInitialState: function () {
        var editor = this.props.editor.get('nativeEditor');
        var image = editor.getSelection().getSelectedElement();
        var imageWidthAsPercent = image.$.offsetWidth / image.$.parentNode.offsetWidth * 100;

        return { imageWidth: Math.round(imageWidthAsPercent) + '%' || 'auto' }
    },
    applyWidth: function (event) {

        var editor = this.props.editor.get('nativeEditor');
        var image = editor.getSelection().getSelectedElement();
        var imageWidth = event.target.value || 'auto';

        this.state.imageWidth = imageWidth;
        image.setAttribute('width', imageWidth);

        editor.fire('actionPerformed', this);

    },
    render: function() {

        return (
            <div className="ae-container">
                <label>width: </label>
                <select name="image-width" onChange={this.applyWidth} onFocus={this.getDefaultValue} value={this.state.imageWidth}>
                    <option value="auto">auto</option>
                    {ButtonImageWidth.widthOptions.map(function(size){
                        return <option key={size} value={size + '%'}>{size + '%'}</option>;
                    })}
                </select>
            </div>
        );
    }
});

AlloyEditor.Buttons[ButtonImageWidth.key] = AlloyEditor.ButtonImageWidth = ButtonImageWidth;