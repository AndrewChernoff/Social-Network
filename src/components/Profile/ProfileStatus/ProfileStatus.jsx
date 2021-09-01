import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        debugger
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateMode}>
                        status: {this.props.status}
                    </div>}

                {this.state.editMode &&
                    <div>
                        status: <input autoFocus={true} onBlur={this.deactivateMode} value={this.props.status} />
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus