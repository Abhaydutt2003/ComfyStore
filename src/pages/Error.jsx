import { Link,useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status == 404) {
    return (
        <>
        <h1> cannot find the page</h1>
        <Link to = "/"> go back home???</Link>
        </>
    );
  } else {
    return <h1> something went wrong!!</h1>;
  }
};

export default Error;
