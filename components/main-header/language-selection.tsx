import { setUserLocale } from "@/i18n/service";
import { IconArrowDown, IconGlobal } from "@/icons";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { useTransition, useState } from "react";

export default function LanguageSelection() {
    const [isPending, startTransition] = useTransition();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function onChange(value: string) {
        if (value === "en" || value === "vi") {
            startTransition(async () => {
                await setUserLocale(value as "en" | "vi");
                window.location.reload();
            });
        }
        handleClose();
    }

    return (
        <>
            <IconButton
                onClick={handleClick}
                disabled={isPending}
            >
                <IconGlobal />
                <IconArrowDown />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={() => onChange("en")}>English</MenuItem>
                <MenuItem onClick={() => onChange("vi")}>Tiếng Việt</MenuItem>
            </Menu>
        </>
    );
}