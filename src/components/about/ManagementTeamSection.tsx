import React from 'react';
import MemberCard from './MemberCard';

const managementTeamMembers = [
  {
    id: '1',
    name: 'Lục Nguyễn',
    position: 'Chairman & CEO',
    information:
      'Ông Nguyễn Xuân Lục là nhà Đồng sáng lập và Phó tổng Giám Đốc Điều Hành có hơn 15 năm kinh nghiệm trong lĩnh vực Công nghệ thông tin, áp dụng công nghệ vào thực tế, lên chiến lược vận hành và kinh doanh của doanh nghiệp. Là một trong những nhà điều hành WATA kể từ khi thành lập cùng với kiến thức Thạc sỹ Quản trị kinh doanh, ông đã giúp công ty phát triển không chỉ trong kinh doanh mà còn phát triển về nhân lực. Với vốn kiến thức sâu về quản lý và kinh nghiệm vượt qua khó khăn, ông là người tư vấn đáng tin cậy đối với cả nhân viên, khách hàng và đối tác.',
    imageName: 'member-LucNguyen.png',
    keyActivities: [
      'Đầu tư nhân lực và nâng cao kiến thức cho nhân viên.',
      'Quản lý vận hành kinh doanh và linh hoạt thay đổi theo tình hình thực tế.',
    ],
  },
  {
    id: '2',
    name: 'Tony',
    position: 'CTO',
    information:
      'Ông Nguyễn Xuân Lục là nhà Đồng sáng lập và Phó tổng Giám Đốc Điều Hành có hơn 15 năm kinh nghiệm trong lĩnh vực Công nghệ thông tin, áp dụng công nghệ vào thực tế, lên chiến lược vận hành và kinh doanh của doanh nghiệp. Là một trong những nhà điều hành WATA kể từ khi thành lập cùng với kiến thức Thạc sỹ Quản trị kinh doanh, ông đã giúp công ty phát triển không chỉ trong kinh doanh mà còn phát triển về nhân lực. Với vốn kiến thức sâu về quản lý và kinh nghiệm vượt qua khó khăn, ông là người tư vấn đáng tin cậy đối với cả nhân viên, khách hàng và đối tác.',
    imageName: 'member-Tony.png',
    keyActivities: [
      'Đầu tư nhân lực và nâng cao kiến thức cho nhân viên.',
      'Quản lý vận hành kinh doanh và linh hoạt thay đổi theo tình hình thực tế.',
    ],
  },
  {
    id: '3',
    name: 'Sammi',
    position: 'COO',
    information:
      'Ông Nguyễn Xuân Lục là nhà Đồng sáng lập và Phó tổng Giám Đốc Điều Hành có hơn 15 năm kinh nghiệm trong lĩnh vực Công nghệ thông tin, áp dụng công nghệ vào thực tế, lên chiến lược vận hành và kinh doanh của doanh nghiệp. Là một trong những nhà điều hành WATA kể từ khi thành lập cùng với kiến thức Thạc sỹ Quản trị kinh doanh, ông đã giúp công ty phát triển không chỉ trong kinh doanh mà còn phát triển về nhân lực. Với vốn kiến thức sâu về quản lý và kinh nghiệm vượt qua khó khăn, ông là người tư vấn đáng tin cậy đối với cả nhân viên, khách hàng và đối tác.',
    imageName: 'member-Sammi.png',
    keyActivities: [
      'Đầu tư nhân lực và nâng cao kiến thức cho nhân viên.',
      'Quản lý vận hành kinh doanh và linh hoạt thay đổi theo tình hình thực tế.',
    ],
  },
];

function ManagementTeamSection() {
  return (
    <div className='md:px-[15%] px-6 py-14 md:py-0 flex-col gap-10 md:gap-14 flex'>
      <div>
        <span className='text-white text-4xl md:text-5xl font-bold leading-[43.20px] md:leading-[57.6px]'>
          Our{' '}
        </span>
        <span className='text-primary text-4xl md:text-5xl font-bold leading-[43.20px] md:leading-[57.6px]'>
          Management Team
        </span>
      </div>

      <div className='md:grid md:grid-cols-3 md:gap-6 flex flex-col gap-10'>
        {managementTeamMembers.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}

export default ManagementTeamSection;
