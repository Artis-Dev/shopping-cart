import NavButton from '../components/Shared/NavButton';

function PageNotFound() {
  return (
    <div className="m-auto flex max-w-screen-xl gap-6 p-12">
      <div className="w-full rounded-lg bg-gray-100 px-12 py-6">
        <div className="text-center">
          <h2 className="mb-6 text-6xl font-semibold">404</h2>
          <h2 className="mb-6 text-2xl font-semibold">
            Sorry. We couldn&apos;t find this page.
          </h2>
          <NavButton link="/" text="Homepage" />
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
