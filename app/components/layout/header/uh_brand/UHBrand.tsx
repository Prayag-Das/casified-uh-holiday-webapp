import React from 'react';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
    return (
        <Link
            className="font-cinzel-decorative-bold font-medium no-underline text-light-dark-7-0" href="/">
            <Image
                src="/holiday/seal.svg"
                width={50}
                height={50}
                alt="logo"
                role="img"/>
            <Label>
              UH Holidays
            </Label>
        </Link>
    );
}

export default Logo;
