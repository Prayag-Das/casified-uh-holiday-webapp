import { useState, useRef } from 'react';
import { useReactTable } from '@tanstack/react-table';
import { Holiday } from '@/components/tables/holidays_table/Holiday';

interface Node {
  value: number;
  next?: Node | null;
}

interface PaginationProps {
  tableInstance: ReturnType<typeof useReactTable<Holiday>>;
}

const Pagination = ({ tableInstance }: PaginationProps) => {
  const [activePage, setActivePage] = useState(0);
  const startPage = Math.max(0, activePage - 2);
  const endPage = Math.min(tableInstance.getPageCount() - 1, startPage + 4);

  const paginationButtonsRef = useRef<Node | null>(null);

  const addPageToLinkedList = (page: number) => {
    const newNode: Node = { value: page, next: paginationButtonsRef.current };
    paginationButtonsRef.current = newNode;
  };

  const removeFirstPageFromLinkedList = () => {
    if (!paginationButtonsRef.current) {
      return;
    }
    paginationButtonsRef.current = paginationButtonsRef.current.next || null;
  };

  const paginationButtons = [];

  for (let i = startPage; i <= endPage; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`btn btn-outline-success ${activePage === i ? 'active' : ''}`}
        onClick={() => {
          tableInstance.setPageIndex(i);
          setActivePage(i);
        }}
      >
        {i + 1}
      </button>
    );
    addPageToLinkedList(i);
  }

  const navigateToPage = (page: number) => {
    tableInstance.setPageIndex(page);
    setActivePage(page);
  };

  return (
    <div className="d-flex justify-content-end">
      <div className="btn-group">
        <button className="btn btn-outline-success" onClick={() => navigateToPage(0)}>
          &lt;&lt; First
        </button>
        <button
          className="btn btn-outline-success"
          disabled={!tableInstance.getCanPreviousPage()}
          onClick={() => {
            tableInstance.previousPage();
            removeFirstPageFromLinkedList();
            addPageToLinkedList(startPage - 1);
            setActivePage(activePage - 1);
          }}
        >
          &lt; Prev
        </button>
        {paginationButtons.map((u) => u)}
        <button
          className="btn btn-outline-success"
          disabled={!tableInstance.getCanNextPage()}
          onClick={() => {
            tableInstance.nextPage();
            removeFirstPageFromLinkedList();
            addPageToLinkedList(endPage + 1);
            setActivePage(activePage + 1);
          }}
        >
          Next &gt;
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => {
            const lastPage = tableInstance.getPageCount() - 1;
            tableInstance.setPageIndex(lastPage);
            setActivePage(lastPage);
          }}
        >
          Last &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;

/*
import { useState, useRef } from 'react';
import { useReactTable } from '@tanstack/react-table';
import { Holiday } from '@/components/tables/holidays_table/Holiday';

interface Node {
  value: number;
  next?: Node | null;
}

interface PaginationProps {
  tableInstance: ReturnType<typeof useReactTable<Holiday>>;
}

const Pagination = ({ tableInstance }: PaginationProps) => {
  const [activePage, setActivePage] = useState(0);
  const startPage = Math.max(0, activePage - 2);
  const endPage = Math.min(tableInstance.getPageCount() - 1, startPage + 4);

  const paginationButtonsRef = useRef<Node | null>(null);

  const addPageToLinkedList = (page: number) => {
    const newNode: Node = { value: page, next: paginationButtonsRef.current };
    paginationButtonsRef.current = newNode;
  };

  const removeFirstPageFromLinkedList = () => {
    if (!paginationButtonsRef.current) {
      return;
    }
    paginationButtonsRef.current = paginationButtonsRef.current.next || null;
  };

  const paginationButtons = [];

  for (let i = startPage; i <= endPage; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`btn btn-outline-success ${activePage === i ? 'active' : ''}`}
        onClick={() => {
          tableInstance.setPageIndex(i);
          setActivePage(i);
        }}
      >
        {i + 1}
      </button>
    );
    addPageToLinkedList(i);
  }

  const navigateToPage = (page: number) => {
    tableInstance.setPageIndex(page);
    setActivePage(page);
  };

  return (
    <div className="d-flex justify-content-end">
      <div className="btn-group">
        <button className="btn btn-outline-success" onClick={() => navigateToPage(0)}>
          &lt;&lt; First
        </button>
        <button
          className="btn btn-outline-success"
          disabled={!tableInstance.getCanPreviousPage()}
          onClick={() => {
            tableInstance.previousPage();
            removeFirstPageFromLinkedList();
            addPageToLinkedList(startPage - 1);
            setActivePage(activePage - 1);
          }}
        >
          &lt; Prev
        </button>
        {paginationButtons.map((u) => u)}
        <button
          className="btn btn-outline-success"
          disabled={!tableInstance.getCanNextPage()}
          onClick={() => {
            tableInstance.nextPage();
            removeFirstPageFromLinkedList();
            addPageToLinkedList(endPage + 1);
            setActivePage(activePage + 1);
          }}
        >
          Next &gt;
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => {
            const lastPage = tableInstance.getPageCount() - 1;
            tableInstance.setPageIndex(lastPage);
            setActivePage(lastPage);
          }}
        >
          Last &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;*/
