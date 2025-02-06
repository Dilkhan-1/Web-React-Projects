import logo from '../images/chef-claude-icon.png';

export default function Header() {
  return (
    <header className="flex justify-center items-center shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),_0px_1px_2px_0px_rgba(0,0,0,0.06)] py-6 bg-white">
      <img src={logo} className="h-12 mr-3" alt="React logo" />
      <span className="text-2xl">Chef Claude</span>
    </header>
  )
}