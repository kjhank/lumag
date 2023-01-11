import { useState } from 'react';
import { ArrowRight } from '@/static';
import { Container } from '../Container/Container';
import {
  List, PageButton, Pages, Pagination, Wrapper,
} from './PaginatedList.styled';
import { PageChange, PaginatedListProps } from './PaginatedList.types';

export const PaginatedList = ({
  className, items, perPage = 4,
}: PaginatedListProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagesCount = Math.ceil(items.length / perPage);

  const handlePageChange = (targetPage: PageChange) => {
    if (typeof targetPage === 'string') {
      setCurrentPage(current => {
        if (targetPage === 'next') {
          return current === pagesCount - 1 ? current : current + 1;
        }

        return current === 0 ? current : current - 1;
      });
    } else {
      setCurrentPage(targetPage);
    }
  };

  return (
    <Wrapper className={className}>
      <Container>
        <List>
          {items.slice(
            currentPage * perPage,
            currentPage * perPage + perPage
          )
            .map(component => component)}
        </List>
        {pagesCount > 1 && (
          <Pagination>
            <Pages>
              <li>
                <PageButton hasFlippedIcon onClick={() => handlePageChange('previous')}>
                  <ArrowRight />
                </PageButton>
              </li>
              {[...new Array(pagesCount)].map((_, index) => {
                const key = index;

                return (
                  <li key={key}>
                    <PageButton
                      isCurrent={index === currentPage}
                      onClick={() => handlePageChange(index)}
                    >
                      {index + 1}

                    </PageButton>
                  </li>
                );
              })}
              <li>
                <PageButton onClick={() => handlePageChange('next')}>
                  <ArrowRight />
                </PageButton>
              </li>
            </Pages>
          </Pagination>
        )}
      </Container>
    </Wrapper>
  );
};
