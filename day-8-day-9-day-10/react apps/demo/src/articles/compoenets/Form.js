import React from "react";

export default class ArtcileAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subject: '',
            body: '',
            addFN: props.addFN

        }
    }

    submitForm() {
        const data = {
            title: this.state.title,
            body: this.state.body,
            subject: this.state.subject,
            
        }

        this.state.addFN(data);

        // rest form !!!
        this.setState({
            title:'',
            subject:'',
            body:''
        })
    }

    render() {
        return (
            <div>

                { /*  IN A SINGLE PAGE APP , FORM SHOULD ///NEVER EVER/// SUBMIT  */}
                { /*  FORM WILL NEVER HAVE ACTION NEATHER METHOD  */}

                <form onSubmit={(e) => {
                    e.preventDefault();

                    // we can call a custom submit function
                    this.submitForm();
                }} >
                    <div>
                        <label>Title
                            {
                                this.state.title != '' ?
                                    <span></span>
                                    :
                                    <span className="danger">*</span>

                            }
                        </label><br />
                        <input type="text" placeholder="article title"
                            onChange={
                                (e) => {
                                    const val = e.target.value;
                                    this.setState({ title: val })
                                }
                            }
                            value={this.state.title} />
                    </div>
                    
                    <div>
                        <label>Subject
                            {
                                this.state.subject != '' ?
                                    <span></span>
                                    :
                                    <span className="danger">*</span>

                            }
                        </label><br />
                        <input type="text" placeholder="article subject"
                            onChange={
                                (e) => {
                                    const val = e.target.value;
                                    this.setState({ subject: val })
                                }
                            }
                            value={this.state.subject} />
                    </div>
                    
                    <div>
                        <label>Body
                            {
                                this.state.body != '' ?
                                    <span></span>
                                    :
                                    <span className="danger">*</span>

                            }
                        </label><br />
                        <textarea  placeholder="article body"
                            onChange={
                                (e) => {
                                    const val = e.target.value;
                                    this.setState({ body: val })
                                }
                            }
                            value={this.state.body} ></textarea>
                    </div>
                    


                    <div>
                        <button type="submit" disabled={this.state.title === "" ? true : false} >SAVE</button>
                    </div>

                </form>

            </div>
        );
    }
}