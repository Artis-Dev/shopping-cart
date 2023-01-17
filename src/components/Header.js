function Header() {
  return (
    <div className="flex bg-gray-100 py-6 px-12">
      <div className="w-60 text-left">LOGO</div>
      <div className="flex grow justify-center">
        <nav className="flex gap-6">
          <p>Home</p>
          <p>Products</p>
          <p>Contacts</p>
        </nav>
      </div>
      <div className="w-60 text-right">Cart</div>
    </div>
  );
}

export default Header;
