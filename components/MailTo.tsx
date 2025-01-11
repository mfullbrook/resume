'use client';

interface MailToProps {
  encodedEmail: string;
  className?: string;
  children?: React.ReactNode;
  prefix?: React.ReactNode;
}

export const MailTo: React.FC<MailToProps> = ({ encodedEmail, className, children, prefix }) => {
  const decodedEmail = Buffer.from(encodedEmail, 'base64').toString('utf-8');
  
  return (
    <a 
      href={`mailto:${decodedEmail}`}
      className={className}
      rel="noopener noreferrer"
    >
      {prefix && prefix}
      {children || decodedEmail}
    </a>
  );
};
