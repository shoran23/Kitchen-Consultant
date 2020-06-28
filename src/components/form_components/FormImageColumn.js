import React from 'react'

class FormImageColumn extends React.Component {
    render() {
        return (
            <div className='form-column'>
                <div className='form-label'>{this.props.label}</div>
                <img src={this.props.image} alt=""/>
            </div>
        )
    }
}
export default FormImageColumn