
import './MyLabel.css';

interface Props {
    /** The text to display */
    label: string;

    /** The size of the text */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /** Whether to capitalize all letters */
    allCaps?: boolean;

    /** The color of the Label */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

    /** The font color of the text */
    fontColor?: string;
}

export const MyLabel = ({ label, size = 'normal', allCaps = false, color = 'text-primary', fontColor = '#00000' }: Props): JSX.Element => {
    return (
        <span
            className={`${size} ${color}`}
            style={{ color: fontColor }}
        >{allCaps ? label.toUpperCase() : label}</span>
    )
}
