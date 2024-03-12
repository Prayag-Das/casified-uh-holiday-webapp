'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import {CellContainer} from '@table-library/react-table-library/common/components/Cell';

const Logo = () => {
    return (
        <CellContainer
            className="font-cinzel-decorative-bold font-medium no-underline text-light-dark-7-0"
            component={Link} href="/">
            <Image
                src="/holiday/seal.svg"
                width={50}
                height={50}
                alt="logo"
                role="img"/>
            <Label>
              UH Holidays
            </Label>
        </CellContainer>
    );
}

export default Logo;
