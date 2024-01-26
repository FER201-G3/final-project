import BaseHeader from "./BaseHeader";
import BaseFooter from "./BaseFooter";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <BaseHeader />
      <main className="pt-10 sm:pt-16">{children}</main>
      <BaseFooter />
    </div>
  );
};

export default BaseLayout;
