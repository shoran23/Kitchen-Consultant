import React from 'react'

class FormInputColumn extends React.Component {
    render() {
        return (
            <div className='form-row'>
                <div className='form-label'>{this.props.label}</div>
                <input 
                    type={this.props.type}
                    name={this.props.name}
                    id={this.props.id}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}
export default FormInputColumn