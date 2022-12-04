import Icon from "components/Icon"
import useWindowDimensions from "pages/hooks/useWindowDimension"


const ShapeFood = ({ iconName = 'knife', label = 'Dinner' }) => {

    const handleResize = useWindowDimensions();

    return (
        <div className="shape-food">
            <Icon name={iconName} style={{ marginLeft: 10, position: 'absolute', marginTop: -15 }} size={handleResize && handleResize?.width > 768 ? 45 : 35} color="#fff" />
            <label>
                {label}
            </label>
        </div>
    )
}

export default ShapeFood