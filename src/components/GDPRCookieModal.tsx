import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Link } from "react-router-dom";

const COOKIE_KEY = "lpf_cookie_preferences";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always enabled
  analytics: false,
  marketing: false,
};

const GDPRCookieModal = () => {
  const [visible, setVisible] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      setVisible(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
    setVisible(false);
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptSelected = () => {
    savePreferences(preferences);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm">
      <GlassCard className="w-full sm:max-w-lg m-4 p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            Cookie Preferences
          </h2>
          <p className="text-sm text-muted-foreground">
            We use cookies to provide essential site functionality and improve
            your experience. You can choose which categories you allow.
            Read our{" "}
            <Link
              to="/privacy-policy"
              className="text-accent underline underline-offset-2"
            >
              Privacy Policy
            </Link>.
          </p>
        </div>

        {/* Cookie Categories */}
        <div className="space-y-4">
          {/* Necessary */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium text-foreground">
                Necessary Cookies
              </p>
              <p className="text-sm text-muted-foreground">
                Required for the website to function properly.
              </p>
            </div>
            <input
              type="checkbox"
              checked
              disabled
              className="mt-1 accent-accent"
            />
          </div>

          {/* Analytics */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium text-foreground">
                Analytics Cookies
              </p>
              <p className="text-sm text-muted-foreground">
                Help us understand how visitors interact with the website.
              </p>
            </div>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  analytics: e.target.checked,
                })
              }
              className="mt-1 accent-accent"
            />
          </div>

          {/* Marketing */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium text-foreground">
                Marketing Cookies
              </p>
              <p className="text-sm text-muted-foreground">
                Used to deliver relevant content and communications.
              </p>
            </div>
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  marketing: e.target.checked,
                })
              }
              className="mt-1 accent-accent"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => savePreferences(defaultPreferences)}
          >
            Reject All
          </Button>

          <Button
            variant="secondary"
            size="sm"
            onClick={acceptSelected}
          >
            Save Preferences
          </Button>

          <Button
            variant="hero"
            size="sm"
            onClick={acceptAll}
          >
            Accept All
          </Button>
        </div>
      </GlassCard>
    </div>
  );
};

export default GDPRCookieModal;

