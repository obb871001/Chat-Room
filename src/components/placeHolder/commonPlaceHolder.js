import { Placeholder } from "semantic-ui-react";

const CommonPlaceHolder = ({ children, loading, className }) => {
  return loading
    ? Array.from({ length: 10 }).map((_, index) => {
        return (
          <Placeholder className={className}>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        );
      })
    : children;
};

export default CommonPlaceHolder;
