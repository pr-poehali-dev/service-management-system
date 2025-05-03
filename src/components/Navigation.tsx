
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

type NavItemProps = {
  icon: string;
  text: string;
  to: string;
  active?: boolean;
};

const NavItem = ({ icon, text, to, active }: NavItemProps) => {
  return (
    <Link to={to}>
      <Button 
        variant={active ? "default" : "ghost"} 
        className={`w-full justify-start mb-1 ${active ? 'bg-primary text-white' : ''}`}
      >
        <Icon name={icon} className="mr-2" size={18} />
        {text}
      </Button>
    </Link>
  );
};

const Navigation = () => {
  return (
    <div className="w-64 h-screen bg-gray-50 p-4 border-r border-gray-200">
      <div className="flex items-center mb-8">
        <Icon name="Car" size={24} className="text-primary mr-2" />
        <h1 className="text-xl font-bold">АвтоСервис</h1>
      </div>
      
      <div className="space-y-1">
        <NavItem icon="LayoutDashboard" text="Главная" to="/" active />
        <NavItem icon="Calendar" text="Расписание" to="/schedule" />
        <NavItem icon="UserRound" text="Клиенты" to="/clients" />
        <NavItem icon="CarFront" text="Автомобили" to="/vehicles" />
        <NavItem icon="Wrench" text="Услуги" to="/services" />
        <NavItem icon="ShoppingCart" text="Запчасти" to="/parts" />
        <NavItem icon="Users" text="Сотрудники" to="/employees" />
        <NavItem icon="Receipt" text="Счета" to="/invoices" />
        <NavItem icon="BarChart" text="Отчеты" to="/reports" />
        <NavItem icon="Settings" text="Настройки" to="/settings" />
      </div>
      
      <div className="absolute bottom-4 left-4 right-4">
        <Button variant="outline" className="w-full">
          <Icon name="LogOut" className="mr-2" size={18} />
          Выйти
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
