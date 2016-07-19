/**
 * Created by Alexandre on 18/07/2016.
 */

var Header = React.createClass({

    render : function() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    Photo
                </div>
                <div className="col-lg-8">
                    <div className="row text-center">
                        <h1>Alexandre PALO</h1>
                    </div>
                    <div className="row text-center">
                        <h2>Ingénieur Arts et Métiers ParisTech</h2>
                    </div>
                </div>
            </div>
        );
    }

});

var Title = React.createClass({

    render : function () {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="text-center"><i className={this.props.iconClassName}></i> {this.props.displayed}</h3>
                </div>
            </div>
        );
    }
});

var Skill = React.createClass({

    render : function () {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <p className="text-center"><i className={this.props.iconClassName}></i> {this.props.displayed}</p>
                </div>
            </div>
        );
    }
});

var ProExperience = React.createClass({

    render : function () {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.begin} - {this.props.end}</p>
                    <p>{this.props.comment}</p>
                </div>
            </div>
        );
    }
});

var Main = React.createClass({

    render : function () {
        return (
            <div>
                <Header />
                <Title
                    iconClassName="fa fa-calendar"
                    displayed="Timeline"
                />
                <div className="row">
                    <div className="col-lg-6">
                        <Title
                            iconClassName="fa fa-briefcase"
                            displayed="Formations et diplômes"
                        />
                    </div>
                    <div className="col-lg-6">
                        <Title
                            iconClassName="fa fa-flask"
                            displayed="Expériences"
                        />
                    </div>
                </div>
                <div className="row">
                    <Title
                        iconClassName="fa fa-cogs"
                        displayed="Compétences"
                    />
                    <div className="col-lg-6">
                        <div className="row">
                            <Title
                                iconClassName="fa fa-cogs"
                                displayed="Informatiques"
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <Skill
                                    iconClassName="fa fa-html5"
                                    displayed="HTML5"
                                />
                                <Skill
                                    iconClassName="fa fa-css3"
                                    displayed="CSS3"
                                />
                                <Skill
                                    iconClassName="fa fa-windows"
                                    displayed="Suite office"
                                />
                            </div>
                            <div className="col-lg-4">
                                <Skill
                                    iconClassName="fa fa-git"
                                    displayed="Git"
                                />
                                <Skill
                                    iconClassName="fa fa-linux"
                                    displayed="Linux"
                                />
                                <Skill
                                    iconClassName="fa fa-envira"
                                    displayed="Photoshop CS5"
                                />
                            </div>
                            <div className="col-lg-4">
                                <Skill
                                    iconClassName="fa fa-facebook"
                                    displayed="React JS"
                                />
                                <Skill
                                    iconClassName="fa fa-code"
                                    displayed="Django Python"
                                />
                                <Skill
                                    iconClassName="fa fa-code"
                                    displayed="VB / VBA Excel"
                                />


                            </div>



                        </div>
                        <div className="col-lg-6">
                            <Title
                                iconClassName="fa fa-cogs"
                                displayed="Languistiques"
                            />
                            <Skill
                                iconClassName="fa fa-comment-o"
                                displayed="Anglais"
                            />
                            <Skill
                                iconClassName="fa fa-comment-o"
                                displayed="Allemand"
                            />
                        </div>



                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('main-container'));

