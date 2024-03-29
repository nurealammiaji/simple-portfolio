
const SectionHeader = ({ subtitle, title }) => {
    return (
        <div className="mt-40 mb-20 text-center">
            <h4 className="font-medium text-slate-600">{subtitle}</h4>
            <h3 className="mt-4 text-5xl font-bold">{title}</h3>
        </div>
    );
};

export default SectionHeader;