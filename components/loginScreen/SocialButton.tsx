import { IconButton, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type IPropSocialButton = {
    className?: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
    onClick: () => void;
}

export default function SocialButton({ Icon, className, onClick }: IPropSocialButton) {

    const styles = twMerge("flex items-center justify-center", className)

    return (
        <div className={styles}>
            <IconButton onClick={onClick} >
                <Icon />
            </IconButton>
        </div>
    );
};
