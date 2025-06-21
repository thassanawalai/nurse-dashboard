import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/surveys')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading surveys:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="center-container">
      <h1>ข้อมูลผู้ตอบแบบสอบถาม</h1>
      <div className="dashboard-table-container">
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 border-b">#</th>
                  <th className="px-4 py-2 border-b">ชื่อเล่น</th>
                  <th className="px-4 py-2 border-b">อายุ</th>
                  <th className="px-4 py-2 border-b">เพศ</th>
                  <th className="px-4 py-2 border-b">อาชีพ</th>
                  <th className="px-4 py-2 border-b">ระดับ</th> {/* เปลี่ยนหัวตาราง */}
                  <th className="px-4 py-2 border-b">วันที่ตอบ</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  const info = item.personalInfo || {};
                  // ดึง level จากข้อมูล (ถ้าอยู่ใน item.level หรือ item.results.nineQ.level)
                  const level =
                    item.results?.nineQ?.level ??
                    item.level ??
                    '-';
                  const date =
                    item.results?.nineQ?.timestamp ||
                    item.results?.timestamp ||
                    item.createdAt;

                  return (
                    <tr key={item._id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">{index + 1}</td>
                      <td className="px-4 py-2 border-b">{info.nickname || '-'}</td>
                      <td className="px-4 py-2 border-b">{info.age || '-'}</td>
                      <td className="px-4 py-2 border-b">{info.gender || '-'}</td>
                      <td className="px-4 py-2 border-b">{info.occupation || '-'}</td>
                      <td className="px-4 py-2 border-b">{level}</td> {/* เปลี่ยนตรงนี้ */}
                      <td className="px-4 py-2 border-b">
                        {date ? new Date(date).toLocaleString('th-TH') : '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
