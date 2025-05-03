
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";

type StatCardProps = {
  title: string;
  value: string;
  icon: string;
  description?: string;
  change?: number;
};

const StatCard = ({ title, value, icon, description, change }: StatCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        <Icon name={icon} className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
        {change !== undefined && (
          <div className="flex items-center mt-1">
            <Icon 
              name={change >= 0 ? "TrendingUp" : "TrendingDown"} 
              className={`h-4 w-4 mr-1 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`} 
            />
            <span className={`text-xs ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {Math.abs(change)}% по сравнению с прошлым месяцем
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  // Здесь в реальном приложении данные будут загружаться с сервера
  const todayAppointments = [
    { time: "9:00", client: "Иванов А.П.", service: "Замена масла", status: "В процессе" },
    { time: "10:30", client: "Петрова С.В.", service: "Диагностика", status: "Ожидание" },
    { time: "13:15", client: "Сидоров И.К.", service: "Замена тормозных колодок", status: "Завершено" },
    { time: "15:45", client: "Козлов В.А.", service: "Регулировка развал-схождения", status: "Ожидание" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Обзор автосервиса</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Записи сегодня" 
          value="12" 
          icon="Calendar" 
          change={8} 
        />
        <StatCard 
          title="Активные заказы" 
          value="5" 
          icon="ClipboardList" 
          description="3 в процессе, 2 ожидают" 
        />
        <StatCard 
          title="Средний чек" 
          value="4,250 ₽" 
          icon="CreditCard" 
          change={-3} 
        />
        <StatCard 
          title="Загруженность" 
          value="78%" 
          icon="Activity" 
          description="2 свободных механика" 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Сегодняшние записи</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center border-b pb-3">
                  <div className="bg-gray-100 p-2 rounded-lg mr-4">
                    <Icon name="Clock" className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">{appointment.client}</p>
                      <p className="text-sm text-gray-500">{appointment.time}</p>
                    </div>
                    <p className="text-sm text-gray-600">{appointment.service}</p>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    appointment.status === "В процессе" ? "bg-blue-100 text-blue-800" :
                    appointment.status === "Завершено" ? "bg-green-100 text-green-800" :
                    "bg-yellow-100 text-yellow-800"
                  }`}>
                    {appointment.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Показатели эффективности</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Выполнение плана</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Удовлетворенность клиентов</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Своевременность выполнения</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Загрузка персонала</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
