import { listSubmenuFooter } from "@/data";

export function MenuFooter() {
  return (
    <div className="py-8 px-2">
      <div className="grid grd-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          {listSubmenuFooter.slice(0, 3).map(({ id, submenu, title }) => (
            <div key={id} className="space-y-2">
              <h3 className="font-bold text-base mb-2">{title}</h3>
              <ul className="space-y-1">
                {submenu.map(({ id, href, label, icon: Icon }) => (
                  <li key={id} className="flex items-center gap-2">
                    <a
                      href={href}
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      {label}
                    </a>
                    {Icon && <Icon className="w-4 h-4" />}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {listSubmenuFooter.slice(3).map(({ id, submenu, title }) => (
          <div key={id} className="space-y-2">
            <h3 className="font-bold text-base mb-2">{title}</h3>
            <ul className="space-y-2">
              {submenu.map(({ id, href, label, icon: Icon }) => (
                <li
                  key={id}
                  className="flex items-center gap-2 hover:text-black hover:underline"
                >
                  <a href={href} className="text-gray-600 text-sm">
                    {label}
                  </a>
                  {Icon && <Icon className="w-4 h-4" />}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
