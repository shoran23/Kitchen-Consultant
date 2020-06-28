import React from 'react'

class FormImageRow extends React.Component {
    render() {
        return (
            <div className='form-row'>
                <div className='form-label'>{this.props.label}</div>
                <img src={this.props.image} alt=""/>
            </div>
        )
    }
}
export default FormImageRow