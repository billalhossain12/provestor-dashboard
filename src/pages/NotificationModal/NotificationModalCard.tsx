import moment from 'moment/moment';

type NotificationType = {
	title: string;
	description: string;
	createdAt: string;
	_id: string;
};

type NotificationModalCardProps = {
	item: NotificationType;
};

export default function NotificationModalCard({
	item,
}: NotificationModalCardProps) {
	const { title, description, createdAt } = item;
	return (
		<div
			style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.10)' }}
			className="rounded-[20px] md:p-[1rem] p-3 m-1"
		>
			<h3 className="md:text-[1.2rem] text-[14px] font-bold">{title}</h3>
			<p className="text-gray-600 my-1 md:text-[14px] text-[12px]">
				{description}
			</p>
			<p className="text-gray-500 md:text-[12px] text-[10px]">
				{moment(createdAt).format('LLL')}
			</p>
		</div>
	);
}
