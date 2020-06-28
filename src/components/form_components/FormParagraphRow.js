import React from 'react'

class FormParagraphColumn extends React.Component {
    render() {
        return (
            <div className='form-row'>
                <div className='form-label'>{this.props.label}</div>
                <p className='form-paragraph'>{this.props.paragraph}</p>
            </div>
        )
    }
}
export default FormParagraphColumn