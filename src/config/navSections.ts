// src/config/navSections.ts
import type { SvgIconProps } from '@mui/material';
import type { ComponentType } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import FolderIcon from '@mui/icons-material/Folder';
import SendIcon from '@mui/icons-material/Send';

export type NavSectionId = 'about' | 'edu' | 'projects' | 'contact';

export type NavSection = {
    id: NavSectionId;
    label: string;
    href: string;
    icon: ComponentType<SvgIconProps>;
};

export const navSections: NavSection[] = [
    {
        id: 'about',
        label: 'O mně',
        href: '#about-me',
        icon: PersonIcon,
    },
    {
        id: 'edu',
        label: 'Vzdělání, práce a brigády v IT',
        href: '#edu-work-brig',
        icon: SchoolIcon,
    },
    {
        id: 'projects',
        label: 'Projekty',
        href: '#projects',
        icon: FolderIcon,
    },
    {
        id: 'contact',
        label: 'Kontakt na mě',
        href: '#footer',
        icon: SendIcon,
    },
];
