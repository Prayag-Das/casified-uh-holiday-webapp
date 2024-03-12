/*
'use client';

import React from 'react';
import { Anchor, Box, Center, Menu, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

const CampusDropdownMenu = () => ( 
    <Menu width={150}>
        <Menu.Target>
            <Box className="link">
                <UnstyledButton>
                    <Center>
                        <span className="mr-[5px] text-sm leading-none font-medium">Campuses</span>
                        <IconChevronDown size="0.9rem" stroke={1.5} />
                    </Center>
                </UnstyledButton>
            </Box>
        </Menu.Target>

        <Menu.Dropdown mt={7}>
            <Menu.Label>Universities</Menu.Label>
            <Menu.Item component={Anchor} href="https://hilo.hawaii.edu/" target="_uhhi"
                underline="never" role="link">
                Hilo
            </Menu.Item>
            <Menu.Item component={Anchor} href="https://manoa.hawaii.edu/" target="_uhma"
                underline="never" role="link">
                Manoa
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://westoahu.hawaii.edu/" target="_uhwo"
                underline="never" role="link">
                West Oahu
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Community Colleges</Menu.Label>
            <Menu.Item component={Anchor} href="https://hawaii.hawaii.edu/" target="_uhcchi"
                underline="never" role="link">
                Hawaii
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://honolulu.hawaii.edu/" target="_uhccho"
                underline="never" role="link">
                Honolulu
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://kapiolani.hawaii.edu/" target="_uhccka"
                underline="never" role="link">
                Kapiolani
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://kauai.hawaii.edu/" target="_uhccku"
                underline="never" role="link">
                Kauai
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://www.leeward.hawaii.edu/" target="_uhccle"
                underline="never" role="link">
                Leeward
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://maui.hawaii.edu/" target="_uhccmu" 
                underline="never" role="link">
                Maui
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://windward.hawaii.edu/" target="_uhccwi" 
                underline="never" role="link">
                Windward
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
);

export default CampusDropdownMenu;
*/

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconChevronDown } from '@tabler/icons-react';
import React from "react";

const CampusDropdownMenu = () => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline">
                <span className="mr-[5px] text-sm leading-none font-medium">Campuses</span>
                <IconChevronDown size="0.9rem" stroke={1.5}/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Universities</DropdownMenuLabel>
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    <a href="https://hilo.hawaii.edu/" role="link">Hilo</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="https://manoa.hawaii.edu/" role="link">Manoa</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="https://westoahu.hawaii.edu/" role="link">West Oahu</a>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Community Colleges</DropdownMenuLabel>
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    <a href="https://hawaii.hawaii.edu/" role="link">Hawaii</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="https://honolulu.hawaii.edu/" role="link">Honolulu</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="https://kapiolani.hawaii.edu/" role="link">Kapiolani</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="https://kauai.hawaii.edu/" role="link">Kauai</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="https://leeward.hawaii.edu/" role="link">Leeward</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="https://maui.hawaii.edu/" role="link">Maui</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="https://windward.hawaii.edu/" role="link">Windward</a>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
);

export default CampusDropdownMenu;
