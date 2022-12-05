import Icon from "components/Icon"

import { useWindowSize } from 'usehooks-ts'


const ShapeFood = ({ iconName = 'knife', label = 'Dinner' }) => {

    const { width } = useWindowSize()

    return (
        <div className="shape-food">
            <Icon name={iconName} style={{ marginLeft: 10, position: 'absolute', marginTop: -15 }} size={width > 768 ? 45 : 35} color="#fff" />
            <label>
                {label}
            </label>
        </div>
    )
}

export default ShapeFood