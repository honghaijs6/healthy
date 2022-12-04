import Icon from "components/Icon"


const ShapeFood = ({ iconName = 'knife', label = 'Dinner' }) => {
    return (
        <div className="shape-food">
            <Icon name={iconName} style={{ marginLeft: 10, position: 'absolute', marginTop: -15 }} size={45} color="#fff" />
            <label>
                {label}
            </label>
        </div>
    )
}

export default ShapeFood