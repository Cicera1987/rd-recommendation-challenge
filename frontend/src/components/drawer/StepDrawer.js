import { CloseButton, FollowButton } from '../Form/Buttons';
import { Follow } from '../assets';


export default function StepDrawer({ isOpen, onClose, onNext, text, description }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 p-6 flex flex-col justify-between transition-transform transform translate-x-0">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-blue">{text}</h2>
          <p className="text-gray text-lg leading-relaxed space-y-2">{description}</p>
        </div>
        <div className="flex justify-between">
          <CloseButton text="Fechar" onClose={onClose} />
          <FollowButton icon={<Follow />} onNext={onNext} />
        </div>
      </div>
    </>
  );
}
