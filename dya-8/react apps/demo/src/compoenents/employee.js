// props


const styles = {
    old: { color:'green' },
    new : { color:'orange' }
}

function EmployeeItem(props){

    console.log(props);

    // interdit
    //props.email="test";

    /*if (props.year < 2009) {
        return(
            <div>
                <p>
                    <strong className="old">{ props.fullname }</strong> <br/>
                    <small>{ props.email }</small>
                </p>
            </div>
        );
    } else {
        return(
            <div>
                <p>
                    <strong className="new">{ props.fullname }</strong> <br/>
                    <small>{ props.email }</small>
                </p>
            </div>
        );
    }*/


   /**  OLD
    *  let bloc = <div></div>;

    if (props.year > 2009) {
        bloc = <small>{ props.year }</small>;
    }
    */

    return(
        <div>
            <p>
                {/**<strong className={ props.year < 2009 ? 'old' : 'new'  }>{ props.fullname }</strong> <br/> */}


                <strong   style={ props.year < 2009 ? styles.old : styles.new }   >{ props.fullname }</strong> <br/>



                <small>{ props.email }</small> <br/>

                {   /** new  */
                    props.year > 2009 ?
                    <small>{ props.year }</small>
                    :
                    <div></div>
                }
            </p>
        </div>
    );
}

export default EmployeeItem;