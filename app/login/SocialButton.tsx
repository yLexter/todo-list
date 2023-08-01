import { IconButton, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React, { CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

type IPropSocialButton = {
    className?: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
    sxIcon?: CSSProperties;
    onClick: () => void;
}

export default function SocialButton({ Icon, className, onClick, sxIcon }: IPropSocialButton) {

    const styles = twMerge("flex items-center justify-center", className)

    return (
        <div className={styles}>
            <IconButton onClick={onClick} >
                <Icon sx={sxIcon} />
            </IconButton>
        </div>
    );
};
