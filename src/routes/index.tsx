import {memo, Suspense} from "react";
import {useRoutes} from 'react-router-dom';
import PageLoading from "@/components/PageLoading";
import {routes} from "@/routes/route.ts";

export const SuspenseLazy = memo(({children}: { children: React.ReactNode }) => (
  <Suspense fallback={<PageLoading/>}>{children}</Suspense>
));

export default memo(() => {
  const routesElement = useRoutes(routes)

  return (
    <>
      <SuspenseLazy>{routesElement}</SuspenseLazy>
    </>
  )
})