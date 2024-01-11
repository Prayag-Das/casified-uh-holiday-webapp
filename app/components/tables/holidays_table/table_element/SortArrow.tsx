'use client';

import {ArrowUp, ArrowDown, ChevronBarUp, ChevronBarDown, ChevronUp, ChevronDown, CaretUpFill, CaretDownFill}
    from 'react-bootstrap-icons';
interface sortArrowProps {
    sortDirection : string | boolean
}

const SortArrow = ({sortDirection}: sortArrowProps) => (
    <>
        {
            sortDirection === 'asc' ? <CaretUpFill/> :
                sortDirection === 'desc' ? <CaretDownFill/> : ''
        }
    </>
)

export default SortArrow;
