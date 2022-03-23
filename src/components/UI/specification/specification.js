import './specification.css';

const Specification = ({tool}) => {
    const specification = tool.toolSpecification.split(";").map((element, i ) => {

        const splitedElement = element.split(":");

        return(
            <div className='specification__line'>
            <dt key={tool.toolUrl + "spec-name-" + i} className="specification__line-name">
                {splitedElement[0]}
            </dt>
            <dd key={tool.toolUrl + "spec-value-" + i} className="specification__line-value">{splitedElement[1]}</dd>
            </div>
        )
    })

    return (
        <div className='specification-wrapper'>
            <h3 className='specification-title'>Технические характеристики:</h3>
            <dl className='specification'>
                {specification}
            </dl>
        </div>
    )
}

export default Specification;