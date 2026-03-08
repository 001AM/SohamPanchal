import { motion } from "framer-motion";

interface StatusIndicatorProps {
  label: string;
  value: string;
  color?: string;
}

const StatusIndicator = ({ label, value, color = "primary" }: StatusIndicatorProps) => (
  <div className="flex items-center gap-3 rounded-lg border border-border bg-card/50 px-4 py-3">
    <div className={`h-1.5 w-1.5 rounded-full bg-${color} node-pulse`} />
    <div>
      <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="font-mono text-xs text-foreground">{value}</p>
    </div>
  </div>
);

const DashboardHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex flex-wrap gap-3"
  >
    <StatusIndicator label="Status" value="Online" />
    <StatusIndicator label="Location" value="Mumbai, IN" />
    <StatusIndicator label="Focus" value="AI Infrastructure" />
    <StatusIndicator label="Systems" value="5 Active" />
  </motion.div>
);

export default DashboardHeader;
