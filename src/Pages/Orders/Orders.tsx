import { useState } from 'react';
import './Orders.scss';
import { OrderTabsData } from '@/components/DashboardComps/OrderComps/OrderCompData';
import TabTitle from '@/components/Tabs/TabTitle';
import TabContents from '@/components/Tabs/TabContents';

const Orders = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');
  return (
    <main className='container orders pb-10'>
      <header className='flex justify-between gap-3 items-center'>
        <h3 className='font-semibold'> Orders</h3>
        <div className='flex gap-3 items-center'>
          {OrderTabsData.TabTitle.map(({ id, title }) => (
            <div key={id}>
              <TabTitle
                id={id}
                title={title}
                activeClass='activeOrderType'
                notActiveClass='notActiveOrderType'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          ))}
        </div>
      </header>

      <section className=''>
        {OrderTabsData.TabContents.map(({ id, comp }) => (
          <div key={id}>
            <TabContents id={id} activeTab={activeTab} comps={comp} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Orders;
