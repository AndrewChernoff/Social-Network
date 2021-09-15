import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    

    activateMode = () => {
        debugger
        this.setState({
            editMode: true
        })
    }

    deactivateMode = (e) => {
        debugger
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        debugger
        let updatedStatus = e.currentTarget.value
        this.setState({
            status: updatedStatus
        })
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (prevProps !== this.props) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        debugger
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateMode}>
                        status: {this.props.status || '-----'}
                    </div>}

                {this.state.editMode &&
                    <div>
                        status: <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateMode} value={this.state.status || '-----'} />
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus