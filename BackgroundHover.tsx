import { ComponentType, useState } from "react"
import { motion } from "framer-motion"

export function withBackgroundLightUp(Component: ComponentType): ComponentType {
    return (props) => {
        const [isHovered, setIsHovered] = useState(false)

        const handleMouseEnter = () => setIsHovered(true)
        const handleMouseLeave = () => setIsHovered(false)

        return (
            <motion.div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animate={{
                    backgroundColor: isHovered ? "#ffeb3b" : "#00000000",
                }}
                transition={{ duration: 0.3 }}
                style={{ width: "100%", height: "100%" }}
            >
                <Component {...props} />
            </motion.div>
        )
    }
}
