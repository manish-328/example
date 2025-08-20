export type BaseProps = {
  className?: string;
  id?: string;
};

// Button types
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export type BasicButtonProps = BaseProps & {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
};

// Input types
export type InputVariant = "default" | "error" | "success";
export type InputSize = "sm" | "md" | "lg";

export type BasicInputProps = BaseProps & {
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  fullWidth?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  name?: string;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
};

// Card types
export type CardProps = BaseProps & {
  children: React.ReactNode;
  variant?: "default" | "bordered" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  clickable?: boolean;
  onClick?: () => void;
};

// Modal types
export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  closeOnOverlayClick?: boolean;
  className?: string;
};

// Table types
export type TableColumn<T> = {
  key: keyof T | string;
  label: string;
  width?: string;
  align?: "left" | "center" | "right";
  render?: (value: any, item: T, index: number) => React.ReactNode;
  sortable?: boolean;
};

export type TableProps<T> = BaseProps & {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (item: T, index: number) => void;
  selectedRows?: T[];
  onSelectionChange?: (selectedRows: T[]) => void;
  selectable?: boolean;
};

// Navigation types
export type NavItem = {
  label: string;
  path: string;
  icon?: string;
  children?: NavItem[];
  disabled?: boolean;
};

// Form types
export type FormFieldProps = BaseProps & {
  label?: string;
  error?: string;
  helper?: string;
  required?: boolean;
  children: React.ReactNode;
};

// Pagination types
export type PaginationProps = BaseProps & {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPrevNext?: boolean;
  showPageNumbers?: boolean;
  maxVisiblePages?: number;
};

// Loading types
export type LoadingSpinnerProps = BaseProps & {
  size?: "sm" | "md" | "lg";
  color?: string;
};

// Badge types
export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info";
export type BadgeProps = BaseProps & {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md" | "lg";
};

// Avatar types
export type AvatarProps = BaseProps & {
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fallback?: string;
  onClick?: () => void;
};

// Toast types
export type ToastType = "success" | "error" | "warning" | "info";
export type ToastProps = {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
};

// Theme types
export type Theme = "light" | "dark" | "system";
export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
};

// API Response types
export type ApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
  error?: string;
};

export type PaginatedResponse<T> = {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

// User types (dummy data structure)
export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "user" | "moderator";
  status: "active" | "inactive" | "pending";
  createdAt: string;
  lastLogin?: string;
};

// Product types (example for e-commerce)
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  createdAt: string;
};

// Dashboard types
export type DashboardStats = {
  totalUsers: number;
  totalProducts: number;
  totalOrders: number;
  revenue: number;
  growthRate: number;
};

export type ChartData = {
  label: string;
  value: number;
  color?: string;
};
