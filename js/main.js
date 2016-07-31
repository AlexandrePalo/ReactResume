/**
 * Created by Alexandre on 18/07/2016.
 */

var SwitchButton = React.createClass({

    switchToFrench : function(){
        this.props.switch('fr');
    },

    switchToEnglish : function(){
        this.props.switch('en');
    },

    render : function (){
        var selectedclassName = 'btn btn-primary';
        var unSelectedclassName = 'btn btn-default';
        var frenchBtnclassName = '';
        var englishBtnclassName = '';
        if (this.props.lang == 'fr') {
            frenchBtnclassName = selectedclassName;
            englishBtnclassName = unSelectedclassName;
        }
        else {
            frenchBtnclassName = unSelectedclassName;
            englishBtnclassName = selectedclassName;
        }
        return (
            <div className="btn-group" role="group">
                <button type="button" className={frenchBtnclassName} onClick={this.switchToFrench} style={{outline : 'none'}}>Français</button>
                <button type="button" className={englishBtnclassName} onClick={this.switchToEnglish} style={{outline : 'none'}}>English</button>
            </div>
        );
    }
});

var Information = React.createClass({

    getDefaultProps : function() {
        return {
            href : undefined,
            first : false
        }
    },

    render : function() {

        var iconClassName = 'fa fa-stack-1x fa-' + this.props.icon;
        var rowClassName = 'row';
        if (this.props.first) {
            rowClassName += ' m-t-10';
        }

        if (this.props.href != undefined) {
            return (
                <div className={rowClassName}>
                    <a className="col-lg-12" href={this.props.href}>
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle-thin fa-stack-2x" />
                        <i className={iconClassName} />
                    </span>
                        {this.props.label}
                    </a>
                </div>
            );
        }
        else {
            return (
                <div className="row">
                    <div className="col-lg-12">
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle-thin fa-stack-2x" />
                        <i className={iconClassName} />
                    </span>
                        {this.props.label}
                    </div>
                </div>
            );
        }
    }

});

var Header = React.createClass({

    render : function() {
        return (
            <div>

                <div className="row m-t-5 border-bottom">
                    <div className="col-lg-12">
                        <SwitchButton switch={this.props.switch} lang={this.props.lang} />
                    </div>
                </div>

                <div className="row m-t-20 border-bottom">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src="static/photo-id.png" alt="" className="profile-img" />
                            </div>
                            <div className="col-lg-8" style={{height: 100+'px'}}>
                                <div className="row" style={{height: 50+'px', 'padding-top': 25+'px'}}>
                                    <div className="col-lg-12 ">
                                        <h1>Alexandre Palo</h1>
                                    </div>
                                </div>
                                <div className="row" style={{height: 50+'px'}}>
                                    <div className="col-lg-12">
                                        <h2>Ingénieur généraliste</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row m-t-20">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2>About me</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-justify">
                                    Hacque adfabilitate confisus cum eadem postridie feceris, ut incognitus haerebis et repentinus, hortatore illo hesterno clientes numerando, qui sis vel unde venias diutius ambigente agnitus vero tandem et adscitus in amicitiam si te salutandi adsiduitati dederis triennio indiscretus et per tot dierum defueris tempus, reverteris ad paria perferenda, nec ubi esses interrogatus et quo tandem miser discesseris, aetatem omnem frustra in stipite conteres summittendo.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-offset-1 col-lg-3">
                        <Information label="06 28 94 17 92" icon="phone" first="true"/>
                        <Information label="alexandre.palo@ensam.eu" icon="envelope-o"/>
                        <Information label="LinkedIn Profile" icon="linkedin" href="https://linkedin.com/in/alexandrepalo"/>
                        <Information label="Github Profile" icon="git" href="https://github.com/AlexandrePalo"/>
                        <Information label="Permis B avec voiture" icon="car"/>
                        <Information label="23 ans" icon="user"/>
                    </div>
                </div>
            </div>
        );
    }

});

var ProExperience = React.createClass({

    render : function () {

        if (this.props.selected == undefined) {
            var className = this.props.colClassName + ' proExp';
            return (
                <div className={className}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>{this.props.title}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-justify">
                            {this.props.corpus}
                        </div>
                    </div>
                </div>
            );
        }
        else if (this.props.selected == this.props.index) {
            var className = this.props.colClassName + ' proExp selected';
            return (
                <div className={className}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>{this.props.title}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-justify">
                            {this.props.corpus}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            var className = this.props.colClassName + ' proExp unselected';
            return (
                <div className={className}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>{this.props.title}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-justify">
                            {this.props.corpus}
                        </div>
                    </div>
                </div>
            );
        }

    }
});

var Circle = React.createClass({

    getInitialState : function() {
        return {
            clicked: false
        }
    },

    onMouseOver : function(e) {
        if (!this.props.clicked) {
            this.props.onChange(this.props.index, false)
        }
    },

    onMouseOut : function(e) {
        if (!this.props.clicked) {
            this.props.onChange(undefined, false)
        }
    },

    onClick : function(e) {
        if ((this.props.index == this.props.selected) && !this.props.clicked) {
            this.setState({clicked: true});
            this.props.onChange(this.props.index, true);
        }
        else if ((this.props.index == this.props.selected) && this.props.clicked) {
            this.setState({clicked: false});
            this.props.onChange(undefined, false);
        }
        else {
            this.setState({clicked: true});
            this.props.onChange(this.props.index, true)
        }
    },

    render : function() {
        if (this.props.index == this.props.selected) {
            return (
                <li onClick={this.onClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                    <span className="yearTimeline">{this.props.year}</span><div className="circle selected"></div>
                </li>
            );
        }
        else {
            return (
                <li onClick={this.onClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                    <span className="yearTimeline">{this.props.year}</span><div className="circle"></div>
                </li>
            );
        }
    }
});

var Timeline = React.createClass({

    getInitialState : function () {
        return {
            clicked : false,
            selected : undefined,
            circles : [
                {
                    year : 2013
                },
                {
                    year : 2014
                },
                {
                    year : 2015
                },
                {
                    year : 2016
                },
                {
                    year : 2017
                }
            ],
            proExperiencesTop : [
                {
                    colClassName : "col-lg-5",
                    title : "Diplôme d'ingénieur Arts et Métiers",
                    corpus : "Hacque adfabilitate confisus cum eadem postridie feceris, ut incognitus haerebis et repentinus, hortatore illo hesterno clientes numerando, qui sis vel unde venias diutius ambigente agnitus vero tandem et adscitus in amicitiam si te salutandi adsiduitati dederis triennio indiscretus et per tot dierum defueris tempus"
                },
                {
                    colClassName : "col-lg-5 col-lg-offset-2",
                    title : "Master Of Sciences Georgia Institute Of Technology",
                    corpus : "Hacque adfabilitate confisus cum eadem postridie feceris, ut incognitus haerebis et repentinus, hortatore illo hesterno clientes numerando, qui sis vel unde venias diutius ambigente agnitus vero tandem et adscitus in amicitiam si te salutandi adsiduitati dederis triennio indiscretus et per tot dierum defueris tempus"
                }
            ],
            proExperiencesBottom : [
                {
                    colClassName:"col-lg-4",
                    title:"DALKIA groupe EDF",
                    corpus:"Hacque adfabilitate confisus cum eadem postridie feceris, ut incognitus haerebis et repentinus, hortatore illo hesterno clientes numerando, qui sis vel unde venias diutius ambigente agnitus vero tandem et adscitus in amicitiam si te salutandi adsiduitati dederis triennio indiscretus et per tot dierum defueris tempus"
                },
                {     colClassName:"col-lg-4",
                    title:"Atelier d'usinage PRECILOR",
                    corpus:"Hacque adfabilitate confisus cum eadem postridie feceris, ut incognitus haerebis et repentinus, hortatore illo hesterno clientes numerando, qui sis vel unde venias diutius ambigente agnitus vero tandem et adscitus in amicitiam si te salutandi adsiduitati dederis triennio indiscretus et per tot dierum defueris tempus"
                },
                {      colClassName:"col-lg-4",
                    title:"Usine d'électricité de METZ - UEM",
                    corpus:"Hacque adfabilitate confisus cum eadem postridie feceris, ut incognitus haerebis et repentinus, hortatore illo hesterno clientes numerando, qui sis vel unde venias diutius ambigente agnitus vero tandem et adscitus in amicitiam si te salutandi adsiduitati dederis triennio indiscretus et per tot dierum defueris tempus"
                }
            ]
        }
    },

    changeSelection : function (index, clicked) {
        this.setState({selected : index, clicked: clicked});
    },

    render : function () {
        var that = this;
        var proExperiencesTop = this.state.proExperiencesTop.map(function(elem, i){
            return (
                <ProExperience
                    colClassName={elem.colClassName}
                    title={elem.title}
                    corpus={elem.corpus}
                    index={i}
                    selected={that.state.selected}
                />
            );
        });
        var proExperiencesBottom = this.state.proExperiencesBottom.map(function(elem, i){
            var j = i + that.state.proExperiencesTop.length;
            return (
                <ProExperience
                    colClassName={elem.colClassName}
                    title={elem.title}
                    corpus={elem.corpus}
                    index={j}
                    selected={that.state.selected}
                />
            );
        });
        var years = this.state.circles.map(function(elem, i){
            return (
                <Circle
                    year={elem.year}
                    index={i}
                    onChange={that.changeSelection}
                    selected={that.state.selected}
                    clicked={that.state.clicked}
                />
            );
        });

        return (
            <div className="row m-t-20">
                <div className="row">
                    {proExperiencesTop}
                </div>

                <div className="row m-t-20">
                    <ul className="years">
                        {years}
                    </ul>
                    <div className="filling-line"></div>
                </div>

                <div className="row m-t-80 border-bottom">
                    {proExperiencesBottom}
                </div>
            </div>
        );

    }
});

var Title = React.createClass({

    render : function () {
        return (
            <div></div>
        );
    }
});

var Skills = React.createClass({

    render : function () {
        return (
            <div className="row m-t-40">
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="text-center">Compétences</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul>
                                <li>Suite office</li>
                                <li>Programmation</li>
                                <li>Linux</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="text-center">Langues</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul>
                                <li>Français</li>
                                <li>Anglais</li>
                                <li>Allemand</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="text-center">Loisirs</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul>
                                <li>Sport</li>
                                <li>Informatiques</li>
                                <li>Sciences</li>
                                <li>Voyages</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Main = React.createClass({

    getInitialState : function () {
        return {
            lang : 'fr'
        }
    },

    switchLang : function(langCode) {
        this.setState({lang : langCode})
    },

    render : function () {
        return (
            <div>
                <Header switch={this.switchLang} lang={this.state.lang} />
                <Timeline />
                <Skills />
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('main-container'));

